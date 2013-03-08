Ext.define('Документы.ПланДвиженияДенежныхСредств.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 411,width: 652,
	iconCls: 'bogus',
	title: 'План движения денежных средств',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:359px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаПланирования',
			style: 'position:absolute;left:549px;top:57px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:96px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сценарий',
			style: 'position:absolute;left:424px;top:33px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:96px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидДенежныхСредств',
			style: 'position:absolute;left:549px;top:81px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПлатежи',
			style: 'position:absolute;left:556px;top:311px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧДП',
			style: 'position:absolute;left:556px;top:335px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИтогоПоступления',
			style: 'position:absolute;left:556px;top:287px;width:88px;height:19px;',
		},
	]
});