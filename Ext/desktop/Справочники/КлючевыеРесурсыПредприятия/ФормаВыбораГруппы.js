Ext.define('Справочники.КлючевыеРесурсыПредприятия.ФормаВыбораГруппы',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 316,
	iconCls: 'bogus',
	title: 'Группы ключевых ресурсов предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:300px;height:280px;',
			height: 280,width: 300,
			columns:
			[
				{
					text:'Наименование',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:316px;height:25px;',
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