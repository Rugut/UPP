Ext.define('Документы.НачислениеПоБольничномуЛисту.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 580,width: 945,
	iconCls: 'bogus',
	title: 'Начисление по больничному листу',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:743px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:851px;top:33px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:442px;top:56px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:743px;top:56px;width:196px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:442px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Сотрудник',
			style: 'position:absolute;left:139px;top:79px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПервичныйБольничныйЛист',
			style: 'position:absolute;left:139px;top:33px;width:186px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерВходящего',
			style: 'position:absolute;left:237px;top:56px;width:88px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияВходящего',
			style: 'position:absolute;left:139px;top:56px;width:55px;height:19px;',
		},
	]
});