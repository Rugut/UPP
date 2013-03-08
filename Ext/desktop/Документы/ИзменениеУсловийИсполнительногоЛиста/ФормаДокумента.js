Ext.define('Документы.ИзменениеУсловийИсполнительногоЛиста.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 708,
	iconCls: 'bogus',
	title: 'Изменение условий удержания по исполнительному листу',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:454px;top:33px;width:104px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:580px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Физлицо',
			style: 'position:absolute;left:100px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:100px;top:33px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончания',
			style: 'position:absolute;left:100px;top:150px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Размер',
			style: 'position:absolute;left:121px;top:267px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:100px;top:420px;width:600px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Предел',
			style: 'position:absolute;left:121px;top:291px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПолеВвода5',
			style: 'position:absolute;left:454px;top:57px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения',
			style: 'position:absolute;left:522px;top:80px;width:79px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПрожиточныйМинимум',
			style: 'position:absolute;left:265px;top:243px;width:232px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ИсполнительныйЛист',
			style: 'position:absolute;left:100px;top:86px;width:246px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИзменения1',
			style: 'position:absolute;left:522px;top:102px;width:79px;height:19px;',
		},
	]
});