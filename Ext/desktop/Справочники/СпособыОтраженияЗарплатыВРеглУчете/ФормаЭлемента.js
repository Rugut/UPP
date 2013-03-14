Ext.define('Справочники.СпособыОтраженияЗарплатыВРеглУчете.ФормаЭлемента',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:585px;height:408px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Способы отражения зарплаты в регламентированном учете',
	
	items:
	[
		{
			xtype: 'label',
			name: 'НадписьНаименование',
			text: 'Наименование:',
			style: 'position:absolute;left:8px;top:33px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Наименование',
			style: 'position:absolute;left:96px;top:33px;width:481px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРодитель',
			text: 'Группа:',
			style: 'position:absolute;left:8px;top:56px;width:86px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'Родитель',
			style: 'position:absolute;left:96px;top:56px;width:481px;height:19px;',
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:585px;height:25px;',
			items:
			[
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:383px;width:585px;height:25px;',
			items:
			[
				{
					text:'OK',
				},
				'-',
				{
					text:'Записать',
				},
				'-',
				{
					text:'Закрыть',
				},
			]
		},
		{
			xtype: 'tabpanel',
			style: 'position:absolute;left:8px;top:79px;width:569px;height:296px;',
			height: 296,width: 569,
			tabBar:{hidden:true},
			items:
			[
				{
					title:'Настройка способа отражения',
					items:
					[
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДт',
			style: 'position:absolute;left:98px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:50px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1',
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:73px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2',
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:96px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3',
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКт',
			style: 'position:absolute;left:389px;top:27px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:297px;top:50px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1',
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:297px;top:73px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2',
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКт3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:297px;top:96px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3',
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетДтНУ',
			style: 'position:absolute;left:98px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:6px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ1',
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:6px;top:208px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ2',
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоДтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:6px;top:231px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ3',
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СчетКтНУ',
			style: 'position:absolute;left:389px;top:162px;width:80px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ1',
			text: 'Субконто 1:',
			style: 'position:absolute;left:297px;top:185px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1',
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ2',
			text: 'Субконто 2:',
			style: 'position:absolute;left:297px;top:208px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2',
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСубконтоКтНУ3',
			text: 'Субконто 3:',
			style: 'position:absolute;left:297px;top:231px;width:90px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3',
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'ОтражениеВУСН',
			style: 'position:absolute;left:98px;top:277px;width:471px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДтНУ',
			text: 'Счет дебета:',
			style: 'position:absolute;left:6px;top:162px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетДт',
			text: 'Счет дебета:',
			style: 'position:absolute;left:6px;top:27px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКт',
			text: 'Счет кредита:',
			style: 'position:absolute;left:297px;top:27px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСчетКтНУ',
			text: 'Счет кредита:',
			style: 'position:absolute;left:297px;top:162px;width:90px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьНеОтражатьВБухучете1',
			text: 'Начисления сотрудников организации, которым задан этот способ отражения, будут отражаться в бухгалтерском и налоговом учете, как отражены в учете начисления входящие в расчетную базу',
			style: 'position:absolute;left:0px;top:0px;width:569px;height:67px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт1Строка',
			style: 'position:absolute;left:389px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ1Строка',
			style: 'position:absolute;left:389px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт2Строка',
			style: 'position:absolute;left:389px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКт3Строка',
			style: 'position:absolute;left:389px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ2Строка',
			style: 'position:absolute;left:389px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоКтНУ3Строка',
			style: 'position:absolute;left:389px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ1Строка',
			style: 'position:absolute;left:98px;top:185px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ2Строка',
			style: 'position:absolute;left:98px;top:208px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДтНУ3Строка',
			style: 'position:absolute;left:98px;top:231px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт1Строка',
			style: 'position:absolute;left:98px;top:50px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт2Строка',
			style: 'position:absolute;left:98px;top:73px;width:180px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СубконтоДт3Строка',
			style: 'position:absolute;left:98px;top:96px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьРасходыУСН',
			text: 'Отражение в УСН:',
			style: 'position:absolute;left:0px;top:277px;width:96px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			name: 'СпособРаспределенияЗатрат',
			style: 'position:absolute;left:98px;top:119px;width:180px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьСпособРаспределенияЗатрат',
			text: 'Способ распределения затрат:',
			style: 'position:absolute;left:6px;top:119px;width:90px;height:19px;',
		},
					]
				},
				{
					title:'Не отражать в бухучете',
					items:
					[
		{
			xtype: 'label',
			name: 'НадписьНеОтражатьВБухучете',
			text: 'Начисления сотрудников организации, которым задан этот способ отражения, не будут отражаться в бухгалтерском и налоговом учете',
			style: 'position:absolute;left:1px;top:0px;width:568px;height:67px;',
		},
					]
				},
				{
					title:'Распределять по базовым начислениям',
				},
			]
		},
	]
});