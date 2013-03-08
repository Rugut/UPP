Ext.define('Документы.ИзменениеСпециальногоКоэффициентаНМА.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	height: 417,width: 476,
	iconCls: 'bogus',
	title: 'Изменение понижающего коэффициента для расчета амортизации НМА (налоговый учет)',
	
	items: [
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:99px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:199px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:99px;top:342px;width:369px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:99px;top:365px;width:369px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:99px;top:55px;width:220px;height:19px;',
		},
	]
});