Ext.define('Справочники.ХранилищеДополнительнойИнформации.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 261,width: 608,
	iconCls: 'bogus',
	title: 'Дополнительная информация',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:592px;height:220px;',
			height: 220,width: 592,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'ВидДанных',
				},
				{
					text:'ИмяФайла',
				},
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:608px;height:25px;',
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