Ext.define('Документы.ИзменениеСпособовОтраженияРасходовПоАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 487,width: 344,
	iconCls: 'bogus',
	title: 'Изменение способа отражения расходов по амортизации ОС',
	
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
			style: 'position:absolute;left:196px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:96px;top:412px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:435px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:81px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособОтраженияРасходовПоАмортизации',
			style: 'position:absolute;left:94px;top:176px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:107px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:94px;top:133px;width:242px;height:19px;',
		},
	]
});