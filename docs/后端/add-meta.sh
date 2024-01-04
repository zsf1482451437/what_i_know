#!/bin/bash

# 获取脚本自身的文件名
script_name=$(basename "$0")

# 遍历当前目录下的所有文件
for filename in *; do
    # 如果文件名等于脚本自身的文件名，就跳过这个文件
    if [ "$filename" == "$script_name" ]; then
        continue
    fi

    # 获取不带扩展名的文件名
    base_filename="${filename%.*}"

    # 构建要插入的内容
    content_to_insert="---
id: $base_filename
title: $base_filename
tags:
  - $base_filename
---

import TOCInline from \"@theme/TOCInline\";

<TOCInline
  toc={toc.filter((node) => node.level === 2)}
  minHeadingLevel={2}
  maxHeadingLevel={2}
/>
"

    # 将原始文件内容保存到临时文件
    cp "$filename" "$filename.bak"

    # 在文件顶部写入新的内容
    echo "$content_to_insert" > "$filename"
    cat "$filename.bak" >> "$filename"

    # 删除临时文件
    rm "$filename.bak"

    # 输出操作成功的提示信息
    echo "$filename 插入成功！"
done
