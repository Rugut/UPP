Ext.define('Справочники.ГруппыДоступностиСкладов.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 300,width: 467,
	iconCls: 'bogus',
	title: 'Справочник Группы доступности складов',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:451px;height:259px;',
			height: 259,width: 451,
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
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:467px;height:25px;',
			items:
			[
				{
					text:'Разделитель',
				},
				{
					text:'ДействияФормыВыбрать',
				},
			]
		},
	]
});