Ext.define('Справочники.ПорядокПрисвоенияСерийныхНомеров.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	height: 316,width: 600,
	iconCls: 'bogus',
	title: 'Порядок присвоения серийных номеров',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Код',
			style: 'position:absolute;left:527px;top:33px;width:65px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:89px;top:33px;width:398px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПримерСерийногоНомера',
			style: 'position:absolute;left:157px;top:240px;width:267px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:89px;top:264px;width:503px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'КоличествоЗнаков',
			style: 'position:absolute;left:514px;top:240px;width:78px;height:19px;',
		},
	]
});