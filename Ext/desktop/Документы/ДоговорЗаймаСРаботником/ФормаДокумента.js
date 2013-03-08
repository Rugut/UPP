Ext.define('Документы.ДоговорЗаймаСРаботником.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 432,width: 534,
	iconCls: 'bogus',
	title: 'Договор займа с сотрудником',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:230px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:380px;width:432px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ФизЛицо',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаЗайма',
			style: 'position:absolute;left:94px;top:129px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВалютаДокумента',
			style: 'position:absolute;left:94px;top:155px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КурсДокумента',
			style: 'position:absolute;left:278px;top:155px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПроцентЗаПользованиеЗаймом',
			style: 'position:absolute;left:278px;top:129px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СрокПогашения',
			style: 'position:absolute;left:405px;top:182px;width:40px;height:19px;',
		},
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
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаПроцентовПоЗайму',
			style: 'position:absolute;left:94px;top:281px;width:100px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:94px;top:305px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:94px;top:329px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:94px;top:353px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СтавкаНалогообложенияРезидента',
			style: 'position:absolute;left:268px;top:254px;width:46px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:94px;top:182px;width:120px;height:19px;',
		},
	]
});