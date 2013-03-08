Ext.define('Документы.СертификацияНоменклатуры.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 398,width: 666,
	iconCls: 'bogus',
	title: 'Сертификация номенклатуры',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номенклатура',
			style: 'position:absolute;left:96px;top:81px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СерияНоменклатуры',
			style: 'position:absolute;left:445px;top:81px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:96px;top:57px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:322px;width:562px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:96px;top:33px;width:76px;height:19px;',
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
			name: 'Подразделение',
			style: 'position:absolute;left:445px;top:57px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:346px;width:562px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РезультатСертификации',
			style: 'position:absolute;left:96px;top:105px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НормативныйДокумент',
			style: 'position:absolute;left:445px;top:105px;width:213px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НомерСертификата',
			style: 'position:absolute;left:96px;top:129px;width:218px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаСертификата',
			style: 'position:absolute;left:445px;top:129px;width:95px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокГодностиСертификата',
			style: 'position:absolute;left:563px;top:129px;width:95px;height:19px;',
		},
	]
});