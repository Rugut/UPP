Ext.define('Обработки.МотивацияПерсонала.Форма',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:936px;height:563px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Финансовая мотивация персонала',
	
	items:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:494px;height:25px;',
			items:
			[
				{
					xtype: 'splitbutton',
					text:'',
					menu: [
				'-',
				{
					text:'Печать мотиваций',
				},
				'-',
				{
					text:'Закрыть',
				},
				'-',
				{
					text:'Справка',
				},
					]
				},
				'-',
				{
					text:'Печать всех начислений',
				},
				'-',
				{
					text:'Справка',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:703px;top:33px;width:225px;height:521px;',
			height: 521,width: 225,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:33px;width:689px;height:528px;',
			height: 528,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:24px;width:689px;height:159px;',
			height: 159,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:31px;width:274px;height:128px;',
			height: 128,width: 274,
			columns:
			[
				{
					text:'Код',
					width:'63',
				},
				{
					text:'Наименование',
					width:'350',
				},
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:280px;top:31px;width:409px;height:128px;',
			height: 128,width: 409,
			columns:
			[
				{
					text:'Начисление',
					width:'120',
				},
				{
					text:'Показатели для расчета начисления',
					width:'285',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта1',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 1',
					width:'135',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 2',
					width:'135',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 3',
					width:'135',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Показатель 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 4',
					width:'135',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 5',
					width:'135',
				},
				{
					text:'Показатель',
					width:'150',
				},
				{
					text:'Размер 6',
					width:'125',
				},
				{
					text:'Валюта 6',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'150',
				},
				{
					text:'Тарифный разряд 6',
					width:'135',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:689px;height:24px;',
			items:
			[
				{
					text:'&Добавить вид расчета',
				},
				{
					text:'',
				},
				{
					text:'Удалить',
				},
				{
					text:'Изменить',
				},
				'-',
				{
					text:'Печать мотивации',
				},
				'-',
				{
					text:'Обновить',
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:0px;top:187px;width:689px;height:333px;',
			height: 333,width: 689,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:27px;width:689px;height:24px;',
			items:
			[
				'-',
				{
					text:'Печать по подразделению',
				},
				'-',
			]
		},
		{
			xtype: 'grid',
			style: 'position:absolute;left:233px;top:59px;width:456px;height:274px;',
			height: 274,width: 456,
			columns:
			[
				{
					text:'Должность',
					width:'95',
				},
				{
					text:'Начисление',
					width:'105',
				},
				{
					text:'Показатели для расчета начисления',
					width:'255',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 1',
					width:'80',
				},
				{
					text:'Валюта1',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 1',
					width:'135',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 2',
					width:'80',
				},
				{
					text:'Валюта 2',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 2',
					width:'135',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 3',
					width:'80',
				},
				{
					text:'Валюта 3',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 3',
					width:'135',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 4',
					width:'80',
				},
				{
					text:'Валюта 4',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 4',
					width:'135',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 5',
					width:'80',
				},
				{
					text:'Валюта 5',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 5',
					width:'135',
				},
				{
					text:'Показатель',
					width:'120',
				},
				{
					text:'Размер 6',
					width:'80',
				},
				{
					text:'Валюта 6',
					width:'55',
				},
				{
					text:'Показатель для ТР',
					width:'120',
				},
				{
					text:'Тарифный разряд 6',
					width:'135',
				},
				{
					text:'Организация',
					width:'350',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:6px;top:59px;width:221px;height:274px;',
			height: 274,width: 221,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Подразделения организаций',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:221px;height:274px;',
			height: 274,width: 221,
			columns:
			[
				{
					text:'Организация',
					width:'350',
				},
				{
					text:'Наименование',
					width:'274',
				},
				{
					text:'Код',
					width:'76',
				},
			]
		},
					]
				},
				{
					title:'По ЦФО',
					items:
					[
		{
			xtype: 'grid',
			style: 'position:absolute;left:0px;top:0px;width:221px;height:274px;',
			height: 274,width: 221,
			columns:
			[
				{
					text:'Подразделение',
					width:'274',
				},
				{
					text:'Код',
					width:'76',
				},
			]
		},
					]
				},
			]
		},
					]
				},
			]
		},
		{
			xtype: 'label',
			name: 'НадписьДолжности',
			text: ' Должности',
			style: 'position:absolute;left:0px;top:0px;width:456px;height:20px;',
		},
					]
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:881px;top:0px;width:55px;height:25px;',
			items:
			[
				{
					text:'',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:471px;top:0px;width:410px;height:25px;',
			height: 25,width: 410,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Страница1',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьСМ',
			text: 'Редактируется схема мотивации:',
			style: 'position:absolute;left:29px;top:2px;width:176px;height:19px;text-align:left;',
		},
					]
				},
			]
		},
	]
});