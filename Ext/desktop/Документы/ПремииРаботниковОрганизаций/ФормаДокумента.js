Ext.define('Документы.ПремииРаботниковОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 524,width: 652,
	iconCls: 'bogus',
	title: 'Премии сотрудникам организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:424px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:524px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:113px;top:57px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:113px;top:33px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:96px;top:472px;width:548px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВидРасчета',
			style: 'position:absolute;left:113px;top:81px;width:203px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ЧислоМесяцев',
			style: 'position:absolute;left:424px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаБП',
			style: 'position:absolute;left:96px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияБП',
			style: 'position:absolute;left:226px;top:128px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:424px;top:57px;width:220px;height:19px;',
		},
	]
});