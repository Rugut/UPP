Ext.define('Отчеты.РапортРуководителю.НастройкаПараметров',
	{
	extend: 'Ext.window.Window',
	height: 361,width: 356,
	iconCls: 'bogus',
	title: 'Настройка параметров показателя',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:336px;width:356px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'ОК',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:8px;width:340px;height:320px;',
			height: 320,width: 340,
			columns:
			[
				{
					text:'ПредставлениеПараметра',
				},
				{
					text:'Значение',
				},
			]
		},
	]
});