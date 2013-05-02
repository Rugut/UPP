
Ext.define('Меню.ОбработкиФормыОбработки',
    {
        requires: ['Метаданные.Обработки'],
        extend: 'MyDesktop.BogusModule',
        init: function ()
        {
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
            for (var Номер = 0, Элемент; Элемент = Обработки[Номер]; Номер++)
            {
                if (Элемент.ОсновнаяФормаОбъекта == '00000000-0000-0000-0000-000000000000')
                {
                        continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Элемент.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Обработки.' + Элемент.Имя + '.Форма',
                    }
                );
                if (Номер > 50)
                {
                    break;
                }
            }
        }
    }
);