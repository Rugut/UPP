Ext.define('Документы.ЭлектронноеПисьмо.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	height: 350,width: 780,
	iconCls: 'bogus',
	title: 'Электронные письма',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:309px;',
			height: 309,width: 764,
			columns:
			[
				{
					text:'НеРассмотрено',
				},
				{
					text:'СостояниеПотомкаПисьма',
				},
				{
					text:'ЕстьВложения',
				},
				{
					text:'СтатусПисьма',
				},
				{
					text:'Дата',
				},
				{
					text:'ДатаОтправления',
				},
				{
					text:'ДатаТранспорта',
				},
				{
					text:'ОтправительИмя',
				},
				{
					text:'КомуПредставление',
				},
				{
					text:'Тема',
				},
				{
					text:'Номер',
				},
				{
					text:'УчетнаяЗапись',
				},
				{
					text:'Ответственный',
				},
				{
					text:'Основание',
				},
				{
					text:'Комментарий',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
				{
					text:'Подменю3',
				},
				{
					text:'Действие',
				},
				{
					text:'Разделитель',
				},
				{
					text:'Разделитель1',
				},
			]
		},
	]
});