Ext.define('Справочники.МедицинскиеСтраховыеПолисы.РедактированиеДокументаУдостоверяющегоЛичность',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:330px;height:160px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Паспортные данные физического лица',
	
	items:
	[
		{
			xtype: 'label',
			name: 'Надпись2',
			text: 'Вид документа:',
			style: 'position:absolute;left:8px;top:8px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументВид',
			style: 'position:absolute;left:118px;top:8px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись3',
			text: 'Серия:',
			style: 'position:absolute;left:8px;top:33px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументСерия',
			style: 'position:absolute;left:118px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись4',
			text: 'Номер:',
			style: 'position:absolute;left:202px;top:33px;width:38px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументНомер',
			style: 'position:absolute;left:242px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись5',
			text: 'Дата выдачи :',
			style: 'position:absolute;left:8px;top:58px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументДатаВыдачи',
			style: 'position:absolute;left:118px;top:58px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись6',
			text: 'Кем выдан :',
			style: 'position:absolute;left:8px;top:83px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКемВыдан',
			style: 'position:absolute;left:118px;top:83px;width:204px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'Надпись7',
			text: 'Код подразделения:',
			style: 'position:absolute;left:8px;top:108px;width:108px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументКодПодразделения',
			style: 'position:absolute;left:118px;top:108px;width:80px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:135px;width:330px;height:25px;',
			items:
			[
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
			]
		},
	]
});