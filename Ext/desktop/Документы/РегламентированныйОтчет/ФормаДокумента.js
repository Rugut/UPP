Ext.define('Документы.РегламентированныйОтчет.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:400px;height:89px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Документ',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись1',
			text: 'Эта форма вспомогательная, предназначена для открытия нужной формы отчета в виде внешней обработки. ВИЗУАЛЬНО НЕ ОТОБРАЖАЕТСЯ.',
			style: 'position:absolute;left:8px;top:8px;width:384px;height:48px;text-align:left;',
		},
	],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:64px;width:400px;height:25px;',
			dock: 'top',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
	]
});