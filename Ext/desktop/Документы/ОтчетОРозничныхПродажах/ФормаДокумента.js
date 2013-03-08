Ext.define('Документы.ОтчетОРозничныхПродажах.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 457,width: 672,
	iconCls: 'bogus',
	title: 'Отчет о розничных продажах',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:405px;width:570px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеКомпании',
			style: 'position:absolute;left:94px;top:357px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:381px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КассаККМ',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:428px;top:57px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИнвентаризацияТоваровНаСкладе',
			style: 'position:absolute;left:428px;top:81px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтатьяДвиженияДенежныхСредств',
			style: 'position:absolute;left:428px;top:381px;width:236px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Проект',
			style: 'position:absolute;left:428px;top:356px;width:236px;height:20px;',
		},
	]
});