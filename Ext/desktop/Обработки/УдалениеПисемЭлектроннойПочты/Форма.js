Ext.define('Обработки.УдалениеПисемЭлектроннойПочты.Форма',
	{
	extend: 'Ext.window.Window',
	height: 458,width: 682,
	iconCls: 'bogus',
	title: 'Обработка  Удаление писем электронной почты',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:682px;height:25px;',
			items:
			[
				{
					text:'УстановитьФлажки',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель2',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Обновить',
				},
				{
					text:'СнятьФлажки',
				},
				{
					text:'Открыть',
				},
				{
					text:'Действие',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:433px;width:682px;height:25px;',
			items:
			[
				{
					text:'Удалить',
				},
				{
					text:'Разделитель1',
				},
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:666px;height:236px;',
			height: 236,width: 666,
			columns:
			[
				{
					text:'НомерСтроки',
				},
				{
					text:'Использование',
				},
				{
					text:'НеРассмотрено',
				},
				{
					text:'СтатусПисьма',
				},
				{
					text:'ЭлектронноеПисьмо',
				},
				{
					text:'Отправитель',
				},
				{
					text:'Получатели',
				},
				{
					text:'ДатаСоздания',
				},
				{
					text:'ДатаОтправления',
				},
				{
					text:'ДатаТранспорта',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:274px;width:666px;height:151px;',
			height: 151,width: 666,
			columns:
			[
				{
					text:'ПометкаУдаления',
				},
				{
					text:'Данные',
				},
				{
					text:'Метаданные',
				},
			]
		},
	]
});