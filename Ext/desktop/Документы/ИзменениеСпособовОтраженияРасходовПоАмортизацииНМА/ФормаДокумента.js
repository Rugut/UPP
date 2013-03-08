Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 459,width: 392,
	iconCls: 'bogus',
	title: 'Изменение способа отражения расходов по амортизации НМА',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:98px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:198px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:98px;top:383px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:98px;top:407px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:98px;top:81px;width:286px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовБУ',
			style: 'position:absolute;left:120px;top:129px;width:264px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовНУ',
			style: 'position:absolute;left:120px;top:152px;width:264px;height:19px;',
		},
	]
});