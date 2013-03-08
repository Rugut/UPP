Ext.define('Документы.НачислениеЗарплатыРаботникамОрганизаций.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 578,width: 720,
	iconCls: 'bogus',
	title: 'Начисление зарплаты сотрудникам организации',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:510px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:610px;top:33px;width:102px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодРегистрации',
			style: 'position:absolute;left:110px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:510px;top:56px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:85px;top:526px;width:627px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПодразделениеОрганизации',
			style: 'position:absolute;left:110px;top:33px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:510px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисления',
			style: 'position:absolute;left:110px;top:79px;width:202px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюЗаполнить',
			text: 'Заполнить',
			style: 'position:absolute;left:8px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'ПодменюРассчитать',
			text: 'Рассчитать',
			style: 'position:absolute;left:91px;top:130px;width:80px;height:22px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаОчистить',
			text: 'Очистить',
			style: 'position:absolute;left:174px;top:130px;width:84px;height:22px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаНачала',
			style: 'position:absolute;left:110px;top:102px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПериодНачисленияДатаОкончания',
			style: 'position:absolute;left:222px;top:102px;width:90px;height:19px;',
		},
	]
});