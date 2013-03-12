Ext.define('Меню.ДокументыФормыСписка',
    {
        extend: 'MyDesktop.BogusModule',

        init: function () {
            this.launcher =
            {
                text: 'Документы списки',
                iconCls: 'bogus',
                handler: function ()
                {
                    return false;
                },
                menu:
                {
                    items: []
                }
            };
            var Документы = Ext.create("Метаданные.Документы");
            for (var НомерДокумента = 0, Документ; Документ = Документы[НомерДокумента]; НомерДокумента++)
            {
                if (Документ.ОсновнаяФормаСписка == '00000000-0000-0000-0000-000000000000')
                {
                    continue;
                }
                this.launcher.menu.items.push
                (
                    {
                        text: Документ.Имя,
                        iconCls: 'bogus',
                        handler: this.createWindow,
                        scope: this,
                        windowId: ++windowIndex,
                        FormId: 'Документы.' + Документ.Имя + '.ФормаСписка',
                    }
                );
                if (НомерДокумента > 20)
                {
                    break;
                }
            }
        }
    }
);