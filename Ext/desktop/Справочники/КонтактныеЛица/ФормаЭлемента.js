Ext.define('Справочники.КонтактныеЛица.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 387,width: 595,
	iconCls: 'bogus',
	title: 'Контактные лица',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:547px;top:57px;width:40px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:98px;top:57px;width:400px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Фамилия',
			style: 'position:absolute;left:98px;top:33px;width:201px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Имя',
			style: 'position:absolute;left:304px;top:33px;width:139px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Отчество',
			style: 'position:absolute;left:448px;top:33px;width:139px;height:19px;',
		},
	]
});