Ext.define('Обработки.РасчетАвансовыхПлатежейПоЗемельномуНалогу.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:787px;height:402px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Обработка  Расчет авансовых платежей по земельному налогу',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:8px;top:33px;width:70px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:84px;top:33px;width:308px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:284px;width:771px;height:24px;',
			items:
			[
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:308px;width:771px;height:61px;',
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
					text:'Регистрация земельных участков',
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
			style: 'position:absolute;left:0px;top:377px;width:787px;height:25px;',
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
			style: 'position:absolute;left:470px;top:33px;width:100px;height:19px;',
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
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:85px;width:771px;height:189px;',
			height: 189,width: 771,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Код категории земель',
					width:'80',
				},
				{
					text:'Кадастровый номер',
					width:'120',
				},
				{
					text:'Кадастровая стоимость',
					width:'120',
				},
				{
					text:'Доля (числитель)',
					width:'71',
				},
				{
					text:'Доля (знаменатель)',
					width:'71',
				},
				{
					text:'Налоговая ставка',
					width:'60',
				},
				{
					text:'Налоговая база',
					width:'100',
				},
				{
					text:'Сумма налога',
					width:'100',
				},
				{
					text:'Налоговая льгота',
					width:'120',
				},
				{
					text:'Кол. мес. владения',
					width:'60',
				},
				{
					text:'Кол. мес. льготы',
					width:'60',
				},
				{
					text:'Сумма налога к уплате',
					width:'77',
				},
				{
					text:'Код по ОКАТО',
					width:'103',
				},
				{
					text:'Период строительства',
					width:'67',
				},
				{
					text:'КБК',
					width:'117',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:61px;width:771px;height:24px;',
			items:
			[
			]
		},
	]
});