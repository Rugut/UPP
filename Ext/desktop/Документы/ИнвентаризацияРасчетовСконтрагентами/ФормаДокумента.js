Ext.define('Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 450,width: 728,
	iconCls: 'bogus',
	title: 'Инвентаризация расчетов с контрагентами',
	
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
			style: 'position:absolute;left:197px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:496px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:395px;width:616px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:105px;top:371px;width:616px;height:19px;',
		},
	]
});