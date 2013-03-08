Ext.define('Документы.ИзменениеГрафиковАмортизацииОС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 442,width: 344,
	iconCls: 'bogus',
	title: 'Изменение графиков амортизации ОС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:79px;height:19px;',
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
			name: 'Организация',
			style: 'position:absolute;left:94px;top:81px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:390px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:367px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ГрафикАмортизации',
			style: 'position:absolute;left:94px;top:104px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Событие',
			style: 'position:absolute;left:94px;top:127px;width:242px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СобытиеРегл',
			style: 'position:absolute;left:94px;top:150px;width:242px;height:19px;',
		},
	]
});