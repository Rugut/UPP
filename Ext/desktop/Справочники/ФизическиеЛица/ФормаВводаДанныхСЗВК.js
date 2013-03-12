Ext.define('Справочники.ФизическиеЛица.ФормаВводаДанныхСЗВК',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:756px;height:455px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Ввод данных СЗВ-К',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:430px;width:756px;height:25px;',
			items:
			[
				'-',
				{
					text:'Справка',
				},
				{
					text:'Закрыть',
				},
				{
					text:'ОК',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:165px;width:740px;height:152px;',
			height: 152,width: 740,
			columns:
			[
				{
					text:'',
					width:'120',
				},
				{
					text:'Организация',
					width:'60',
				},
				{
					text:'Вид деятельности',
					width:'60',
				},
				{
					text:'',
					width:'180',
				},
				{
					text:'Начало периода',
					width:'60',
				},
				{
					text:'Конец периода',
					width:'60',
				},
				{
					text:'Территориальные условия',
					width:'30',
				},
				{
					text:'РК',
					width:'30',
				},
				{
					text:'',
					width:'180',
				},
				{
					text:'',
					width:'180',
				},
				{
					text:'Код особых',
					width:'80',
				},
				{
					text:'Исчисляемый трудовой стаж',
					width:'190',
				},
				{
					text:'условий труда',
					width:'80',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Годы',
					width:'27',
				},
				{
					text:'Месяцы',
					width:'33',
				},
				{
					text:'Дни',
					width:'30',
				},
				{
					text:'Вид отпуска',
					width:'40',
				},
				{
					text:'Код позиции списка',
					width:'270',
				},
				{
					text:'Должность',
					width:'270',
				},
				{
					text:'Выслуга лет',
					width:'150',
				},
				{
					text:'Код',
					width:'60',
				},
				{
					text:'Часы/месяцы',
					width:'30',
				},
				{
					text:'Минуты',
					width:'30',
				},
				{
					text:'Ставка',
					width:'30',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:363px;width:740px;height:60px;',
			height: 60,width: 740,
			columns:
			[
				{
					text:'Вид стажа',
					width:'220',
				},
				{
					text:'Код стажа',
					width:'120',
				},
				{
					text:'Лет',
					width:'60',
				},
				{
					text:'Месяцев',
					width:'60',
				},
				{
					text:'Дней',
					width:'60',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:339px;width:740px;height:24px;',
			items:
			[
				'-',
				{
					text:'Действие3',
				},
				{
					text:'Действие17',
				},
				{
					text:'Действие4',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие13',
				},
				{
					text:'Действие15',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие16',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие12',
				},
				'-',
				'-',
				{
					text:'Заполнить',
				},
				{
					text:'Действие9',
				},
				{
					text:'Заполнить',
				},
				'-',
				{
					text:'Действие14',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие2',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:8px;top:141px;width:740px;height:24px;',
			items:
			[
				{
					text:'Действие5',
				},
				{
					text:'Заполнить по трудовой деятельности',
				},
				{
					text:'Действие14',
				},
				'-',
				{
					text:'Действие9',
				},
				{
					text:'Действие12',
				},
				{
					text:'Действие',
				},
				{
					text:'Действие10',
				},
				{
					text:'Заполнить по трудовой деятельности',
				},
				{
					text:'Действие1',
				},
				'-',
				{
					text:'Действие17',
				},
				{
					text:'Действие3',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие15',
				},
				{
					text:'Расположить',
				},
				'-',
				'-',
				{
					text:'Расположить',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Действие13',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие16',
				},
				{
					text:'Действие2',
				},
				'-',
			]
		},
		{
			xtype: 'label',
			name: 'НадписьПоСостоянию',
			text: 'по состоянию на 31 декабря 2001 года',
			style: 'position:absolute;left:448px;top:8px;width:212px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьТерриториальныеУсловияДляСЗВК',
			text: 'Территориальные условия:',
			style: 'position:absolute;left:8px;top:8px;width:143px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ТерриториальныеУсловияДляСЗВК',
			style: 'position:absolute;left:151px;top:8px;width:97px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРайонныйКоэффициентДляСЗВК',
			text: 'Районный коэффициент:',
			style: 'position:absolute;left:255px;top:8px;width:132px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'РайонныйКоэффициентДляСЗВК',
			style: 'position:absolute;left:387px;top:8px;width:52px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияДляОценки',
			text: 'Сведения для оценки пенсионных прав застрахованного лица :',
			style: 'position:absolute;left:8px;top:323px;width:338px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСведенияОСтаже',
			text: 'Сведения о стаже застрахованного лица:',
			style: 'position:absolute;left:8px;top:125px;width:226px;height:16px;',
		},
		{
			xtype: 'label',
			name: 'НадписьПериодыТрудовойДеятельности',
			text: 'Периоды трудовой или иной общественно полезной деятельности:',
			style: 'position:absolute;left:8px;top:32px;width:352px;height:15px;',
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:50px;width:740px;height:68px;',
			height: 68,width: 740,
			columns:
			[
				{
					text:'Организация',
					width:'320',
				},
				{
					text:'Вид общественно полезной деятельности',
					width:'220',
				},
				{
					text:'Период',
					width:'180',
				},
			]
		},
	]
});