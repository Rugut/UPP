Ext.define('Отчеты.РапортРуководителю.ФормаГлавная',
	{
	extend: 'Ext.window.Window',
	height: 437,width: 656,
	iconCls: 'bogus',
	title: 'Рапорт руководителю',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:656px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'Опубликовать',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Опубликовать',
				},
				{
					text:'Настройка',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действия',
				},
				{
					text:'Разделитель3',
				},
				{
					text:'Настройка',
				},
				{
					text:'Сформировать',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Справка',
				},
				{
					text:'Справка',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});