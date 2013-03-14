Ext.define('Обработки.РасчетАвансовыхПлатежейПоТранспортномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:392px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Расчет авансовых платежей по транспортному налогу',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;text-align:left;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:63px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:87px;width:771px;height:177px;',
			height: 177,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код вида',
					width:'61',
				},
				{
					text:'Идентификационный номер',
					width:'73',
				},
				{
					text:'Марка',
					width:'82',
				},
				{
					text:'Регистрационный знак',
					width:'100',
				},
				{
					text:'Налоговая база',
					width:'76',
				},
				{
					text:'Единица измерения',
					width:'79',
				},
				{
					text:'Срок использования',
					width:'93',
				},
				{
					text:'Коэффициент',
					width:'87',
				},
				{
					text:'Ставка налога',
					width:'70',
				},
				{
					text:'Сумма налога',
					width:'72',
				},
				{
					text:'Код налоговй льготы',
					width:'83',
				},
				{
					text:'Сумма налоговой льготы',
					width:'99',
				},
				{
					text:'Сумма налога к уплате',
					width:'94',
				},
				{
					text:'Код ОКАТО',
					width:'100',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:274px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:298px;width:771px;height:61px;',
			height: 61,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код ОКАТО',
					width:'100',
				},
				{
					text:'Сумма',
					width:'120',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:787px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'Действия',
					menu: [
					]
				},
				{
					text:'Регистрация транспортных средств',
				},
				'-',
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Сохранить значения...',
				},
				{
					text:'Восстановить значения...',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:367px;width:787px;height:25px;',
			items:
			[
				{
					text:'Печать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПериодСоставленияОтчета',
			text: '',
			style: 'position:absolute;left:470px;top:33px;width:100px;height:19px;text-align:center;',
		},
		{
			xtype: 'button',
			name: 'КнопкаПредыдущийПериод',
			text: '',
			style: 'position:absolute;left:445px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'button',
			name: 'КнопкаСледующийПериод',
			text: '',
			style: 'position:absolute;left:576px;top:33px;width:20px;height:19px;',
		},
	]
});