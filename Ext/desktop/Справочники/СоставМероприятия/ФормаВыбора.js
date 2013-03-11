Ext.define('Справочники.СоставМероприятия.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 508,
	iconCls: 'bogus',
	title: 'Состав мероприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:492px;height:280px;',
			height: 280,width: 492,
			columns:
			[
				{
					text:'Картинка',
				},
				{
					text:'Наименование',
				},
				{
					text:'ДатаНачала',
				},
				{
					text:'ДатаОкончания',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:508px;height:25px;',
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