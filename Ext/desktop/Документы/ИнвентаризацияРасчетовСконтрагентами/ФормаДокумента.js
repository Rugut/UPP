Ext.define('Документы.ИнвентаризацияРасчетовСконтрагентами.ФормаДокумента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:728px;height:450px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Инвентаризация расчетов с контрагентами',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНомер',
			text: 'Номер:',
			style: 'position:absolute;left:8px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Номер',
			style: 'position:absolute;left:94px;top:33px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДата',
			text: 'от:',
			style: 'position:absolute;left:176px;top:33px;width:20px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Дата',
			style: 'position:absolute;left:197px;top:33px;width:120px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОрганизация',
			text: 'Организация:',
			style: 'position:absolute;left:411px;top:33px;width:83px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Организация',
			style: 'position:absolute;left:496px;top:33px;width:225px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:728px;height:25px;',
			items:
			[
				'-',
				'-',
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие3',
				},
				{
					text:'Заполнить',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие5',
				},
				'-',
				'-',
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие',
				},
				'-',
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:424px;width:728px;height:25px;',
			items:
			[
				'-',
				{
					text:'Закрыть',
				},
				{
					text:'OK',
				},
				'-',
				'-',
				{
					text:'Записать',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:60px;width:713px;height:303px;',
			height: 303,width: 713,
			items:
			[
				{
					title:'Дебиторская задолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие7',
				},
				{
					text:'Заполнить дебиторскую задолженность',
				},
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'158',
				},
				{
					text:'Счет расчетов',
					width:'79',
				},
				{
					text:'Всего',
					width:'109',
				},
				{
					text:'Подтверждено',
					width:'104',
				},
				{
					text:'Не подтверждено',
					width:'100',
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
				},
				{
					text:'Вид задолженности',
					width:'107',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиДт',
			text: '',
			style: 'position:absolute;left:6px;top:257px;width:699px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеНомер',
			text: 'Номер:',
			style: 'position:absolute;left:228px;top:26px;width:49px;height:19px;',
		},
					]
				},
				{
					title:'Кредиторская задолженность',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:6px;width:699px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Заполнить кредиторскую задолженность',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие10',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:30px;width:699px;height:224px;',
			height: 224,width: 699,
			columns:
			[
				{
					text:'Контрагент',
					width:'148',
				},
				{
					text:'Счет расчетов',
					width:'78',
				},
				{
					text:'Всего',
					width:'110',
				},
				{
					text:'Подтверждено',
					width:'100',
				},
				{
					text:'Не подтверждено',
					width:'100',
				},
				{
					text:'В т.ч. истек срок давности',
					width:'141',
				},
				{
					text:'Вид задолженности',
					width:'106',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьИтогиКт',
			text: '',
			style: 'position:absolute;left:6px;top:258px;width:699px;height:19px;',
		},
					]
				},
				{
					title:'Счета расчетов',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:46px;width:699px;height:229px;',
			height: 229,width: 699,
			columns:
			[
				{
					text:'Счет',
					width:'124',
				},
				{
					text:'Наименование',
					width:'360',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:22px;width:699px;height:24px;',
			items:
			[
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие6',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие9',
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеВид',
			text: 'Основание:',
			style: 'position:absolute;left:6px;top:26px;width:80px;height:19px;',
		},
					]
				},
				{
					title:'Дополнительно',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:6px;top:146px;width:699px;height:130px;',
			height: 130,width: 699,
			columns:
			[
				{
					text:'N',
					width:'28',
				},
				{
					text:'Члены комиссии',
					width:'265',
				},
				{
					text:'Председатель',
					width:'92',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:6px;top:122px;width:699px;height:24px;',
			items:
			[
				'-',
				{
					text:'Подбор',
				},
				'-',
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеВид',
			style: 'position:absolute;left:88px;top:26px;width:131px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеДата',
			style: 'position:absolute;left:435px;top:26px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДокументОснованиеНомер',
			style: 'position:absolute;left:285px;top:26px;width:115px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДокументОснованиеДата',
			text: 'от:',
			style: 'position:absolute;left:409px;top:26px;width:18px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаНачалаИнвентаризации',
			style: 'position:absolute;left:88px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьДатаОкончанияИнвентаризации',
			text: 'Дата окончания:',
			style: 'position:absolute;left:188px;top:50px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ДатаОкончанияИнвентаризации',
			style: 'position:absolute;left:285px;top:50px;width:92px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ПричинаИнвентаризации',
			style: 'position:absolute;left:88px;top:74px;width:617px;height:19px;',
		},
					]
				},
			]
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Комментарий',
			style: 'position:absolute;left:105px;top:395px;width:616px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьКомментарий',
			text: 'Комментарий:',
			style: 'position:absolute;left:8px;top:395px;width:89px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтветственный',
			text: 'Ответственный:',
			style: 'position:absolute;left:8px;top:371px;width:89px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Ответственный',
			style: 'position:absolute;left:105px;top:371px;width:616px;height:19px;',
		},
	]
});