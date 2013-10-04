Ext.require(['Данные.Отчеты.РасшифровкаОтчетов4ФСС'], function () 
{
	Ext.define('Отчеты.РасшифровкаОтчетов4ФСС.ФормаОтчета',
	{
	extend: 'Ext.window.Window',
	id: 'ФормаОтчета',
	style: 'position:absolute;width:694px;height:464px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Отчет',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		ПервоеОткрытие: true,
		items:
		[
		],
	}],
	dockedItems:
	[
	]
	});
	listeners:
	{
		resize:
		{
			fn: function (win, width, height, opt)
			{
				var форма = win.down('form');
				if (!форма.ПервоеОткрытие)
				{
					форма.items.each(function (item)
					{
					ПривязкаГраниц(item, item.ПозицияЭлемента);
					if (item.Групповой)
					{
						var элемент = Ext.getCmp(item.id).items.items[0].items.items;
						for (i = 0; i <= элемент.length -1; i += 1) 
						{
							var текЭлемент = элемент[i];
							ПривязкаГраниц(текЭлемент, текЭлемент.ПозицияЭлемента);
						}
					}
					});
				}
			}
		}
	}
});