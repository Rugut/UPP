Ext.define('Документы.ИнвентаризацияТоваровНаСкладе.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 472,width: 603,
	iconCls: 'bogus',
	title: 'Инвентаризация товаров на складе',
	
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
			style: 'position:absolute;left:194px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:94px;top:420px;width:502px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:94px;top:397px;width:502px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:94px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Склад',
			style: 'position:absolute;left:376px;top:57px;width:220px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПоФакту',
			style: 'position:absolute;left:474px;top:349px;width:122px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СуммаПоУчету',
			style: 'position:absolute;left:474px;top:373px;width:122px;height:19px;',
		},
	]
});