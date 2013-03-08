Ext.define('Справочники.КлючиАналитикиУчетаПрочихЗатрат.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 359,width: 610,
	iconCls: 'bogus',
	title: 'Ключ аналитики учета прочих затрат',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:95px;top:33px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчета',
			style: 'position:absolute;left:95px;top:212px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетУчетаНУ',
			style: 'position:absolute;left:401px;top:212px;width:81px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто1',
			style: 'position:absolute;left:95px;top:238px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто2',
			style: 'position:absolute;left:95px;top:261px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Субконто3',
			style: 'position:absolute;left:95px;top:286px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ1',
			style: 'position:absolute;left:401px;top:238px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ2',
			style: 'position:absolute;left:401px;top:261px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоНУ3',
			style: 'position:absolute;left:401px;top:286px;width:200px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОбъектСтроительства',
			style: 'position:absolute;left:95px;top:134px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособСтроительства',
			style: 'position:absolute;left:95px;top:161px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:95px;top:59px;width:506px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаИсправительнойЗаписи',
			style: 'position:absolute;left:280px;top:84px;width:120px;height:19px;',
		},
	]
});