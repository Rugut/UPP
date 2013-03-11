Ext.define('Справочники.СохраненныеНастройки.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 327,width: 551,
	iconCls: 'bogus',
	title: 'Выбор настройки',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:60px;width:535px;height:259px;',
			height: 259,width: 535,
			columns:
			[
				{
					text:'Наименование',
				},
				{
					text:'ТипНастройки',
				},
				{
					text:'НастраиваемыйОбъект',
				},
				{
					text:'Описание',
				},
				{
					text:'Пользователи',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:551px;height:25px;',
			items:
			[
				{
					text:'Разделитель2',
				},
				{
					text:'Действие9',
				},
				{
					text:'ВыбратьНастройку',
				},
				{
					text:'Сохранить',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:29px;width:535px;height:27px;',
			height: 27,width: 535,
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
	]
});