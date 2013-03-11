Ext.define('Справочники.НастройкаИнтервалов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 416,
	iconCls: 'bogus',
	title: 'Справочник Настройка интервалов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:400px;height:259px;',
			height: 259,width: 400,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:416px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
	]
});