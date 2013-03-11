Ext.define('Документы.ЭлектронноеПисьмо.ФормаСписка',
	{
	extend: 'Ext.window.Window',
	height: 334,width: 780,
	iconCls: 'bogus',
	title: 'Электронные письма',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:764px;height:293px;',
			height: 293,width: 764,
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
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:780px;height:25px;',
			items:
			[
				{
					text:'Разделитель1',
				},
				{
					text:'Подменю3',
				},
				{
					text:'ДвиженияДокументаПоРегистрам',
				},
			]
		},
	]
});