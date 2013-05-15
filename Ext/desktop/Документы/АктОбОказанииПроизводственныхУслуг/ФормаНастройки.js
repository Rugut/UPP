Ext.define('Документы.АктОбОказанииПроизводственныхУслуг.ФормаНастройки',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:194px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Настройка документа',
	
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
			style: 'position:absolute;left:8px;top:126px;width:384px;height:16px;',
		},
		{
			xtype: 'checkbox',
			boxLabel: 'Использовать заказы',
			style: 'position:absolute;left:8px;top:146px;width:384px;height:15px;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:169px;width:400px;height:25px;',
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