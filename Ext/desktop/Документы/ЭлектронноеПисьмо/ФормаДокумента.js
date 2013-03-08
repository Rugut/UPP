Ext.define('Документы.ЭлектронноеПисьмо.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 441,width: 660,
	iconCls: 'bogus',
	title: 'Электронное письмо',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Кому',
			style: 'position:absolute;left:102px;top:57px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Копии',
			style: 'position:absolute;left:102px;top:81px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Тема',
			style: 'position:absolute;left:102px;top:129px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отправитель',
			style: 'position:absolute;left:102px;top:33px;width:552px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РассмотретьПосле',
			style: 'position:absolute;left:222px;top:153px;width:150px;height:19px;',
		},
	]
});