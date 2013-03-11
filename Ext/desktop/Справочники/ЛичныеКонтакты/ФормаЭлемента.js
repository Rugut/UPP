Ext.define('Справочники.ЛичныеКонтакты.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 387,width: 595,
	iconCls: 'bogus',
	title: 'Личные контакты',
	
	items:
	[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:595px;height:25px;',
			items:
			[
				{
					text:'Разделитель3',
				},
				{
					text:'НаписатьПисьмо',
				},
				{
					text:'ЭлектронныеПисьма',
				},
				{
					text:'Подменю1',
				},
				{
					text:'Разделитель',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:362px;width:595px;height:25px;',
			items:
			[
				{
					text:'Действие1',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Действие2',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:84px;width:579px;height:270px;',
			height: 270,width: 579,
			items:
			[
				{
					title:'АдресаИТелефоны',
				},
				{
					title:'ДополнительнаяИнформация',
				},
				{
					title:'Свойства',
				},
				{
					title:'Категории',
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:98px;top:33px;width:201px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:304px;top:33px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:448px;top:33px;width:139px;height:19px;',
		},
	]
});