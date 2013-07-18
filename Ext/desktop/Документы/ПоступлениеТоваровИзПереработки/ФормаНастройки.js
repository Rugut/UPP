Ext.require(['Данные.Документы.ПоступлениеТоваровИзПереработки'], function () 
{
	Ext.define('Документы.ПоступлениеТоваровИзПереработки.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:254px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка документа',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять материалы',
			style: 'position:absolute;left:8px;top:46px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять прочие затраты',
			style: 'position:absolute;left:8px;top:106px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать материалы',
			style: 'position:absolute;left:8px;top:26px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать прочие затраты',
			style: 'position:absolute;left:8px;top:86px;width:384px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Материалы',
			style: 'position:absolute;left:8px;top:6px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Прочие затраты',
			style: 'position:absolute;left:8px;top:66px;width:384px;height:16px;',
		},
		{
			xtype: 'fieldset',
			title: 'Другие настройки',
			style: 'position:absolute;left:8px;top:186px;width:384px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заказы',
			style: 'position:absolute;left:8px;top:206px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Автоматически распределять возвратные отходы на продукцию',
			style: 'position:absolute;left:8px;top:166px;width:384px;height:15px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать возвратные отходы',
			style: 'position:absolute;left:8px;top:146px;width:384px;height:15px;',
		},
		{
			xtype: 'fieldset',
			title: 'Возвратные отходы',
			style: 'position:absolute;left:8px;top:126px;width:384px;height:16px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:229px;width:400px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'OK',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
	});
});