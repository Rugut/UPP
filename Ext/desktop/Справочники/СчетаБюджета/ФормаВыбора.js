Ext.define('Справочники.СчетаБюджета.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 557,
	iconCls: 'bogus',
	title: 'Счета бюджета',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:176px;top:33px;width:373px;height:259px;',
			height: 259,width: 373,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Код',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:160px;height:259px;',
			height: 259,width: 160,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:557px;height:25px;',
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