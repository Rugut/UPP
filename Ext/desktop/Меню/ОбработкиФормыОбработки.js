Ext.define('Меню.ОбработкиФормыОбработки',
    {
        extend: 'MyDesktop.BogusModule',
        init: function () {
            this.launcher =
            {
                text: 'Обработки',
                iconCls: 'bogus',
                handler: function () {
                    return false;
                },
                menu: {
                    items: []
                }
            };
            var Обработки = Ext.create("Метаданные.Обработки");
            for (var НомерОбработки = 0, Обработка; Обработка = Обработки[НомерОбработки]; НомерОбработки++)
            {
                if (Обработка.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000') {
                    continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Обработка.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Обработки.' + Обработка.Имя + '.Форма',
                    }
                );
                if (НомерОбработки > 20)
                {
                    break;
                }
            }
        }
    }
);