Ext.define('Документы.ОтражениеРеализацииТоваровИУслугНДС.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 473,width: 672,
	iconCls: 'bogus',
	title: 'Отражение начисления НДС',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:90px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:190px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:90px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Контрагент',
			style: 'position:absolute;left:90px;top:81px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДоговорКонтрагента',
			style: 'position:absolute;left:90px;top:105px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РасчетныйДокумент',
			style: 'position:absolute;left:118px;top:129px;width:192px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:90px;top:421px;width:574px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Всего',
			style: 'position:absolute;left:542px;top:377px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ВсегоНДС',
			style: 'position:absolute;left:542px;top:399px;width:122px;height:17px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КорректируемыйПериод',
			style: 'position:absolute;left:490px;top:57px;width:80px;height:19px;',
		},
	]
});