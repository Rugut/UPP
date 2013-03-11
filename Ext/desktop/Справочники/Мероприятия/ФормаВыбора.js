Ext.define('Справочники.Мероприятия.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 321,width: 470,
	iconCls: 'bogus',
	title: 'Мероприятия предприятия',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:454px;height:280px;',
			height: 280,width: 454,
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
			style: 'position:absolute;left:0px;top:0px;width:470px;height:25px;',
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