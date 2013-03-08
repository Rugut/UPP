Ext.define('Справочники.ВидыСчетчиковДляЗначенийРазрядов.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 215,width: 400,
	iconCls: 'bogus',
	title: 'Виды счетчиков для значений разрядов',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:337px;top:33px;width:55px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:117px;top:33px;width:191px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РазмерСчетчика',
			style: 'position:absolute;left:117px;top:56px;width:50px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'НачальноеЗначение',
			style: 'position:absolute;left:117px;top:79px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КонечноеЗначение',
			style: 'position:absolute;left:312px;top:79px;width:80px;height:19px;',
		},
	]
});