Ext.define('Справочники.НастройкиРасчетаСебестоимости.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 418,width: 394,
	iconCls: 'bogus',
	title: 'Настройка расчета себестоимости',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:105px;top:83px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:105px;top:57px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:105px;top:33px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:366px;width:281px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НастройкаЗакрытияМесяца',
			style: 'position:absolute;left:105px;top:109px;width:281px;height:19px;',
		},
	]
});