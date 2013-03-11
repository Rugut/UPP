Ext.define('Справочники.НомераГТД.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 434,
	iconCls: 'bogus',
	title: 'Номера ГТД',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:418px;height:259px;',
			height: 259,width: 418,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:434px;height:25px;',
			items:
			[
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
			]
		},
	]
});