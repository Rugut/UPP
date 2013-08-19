Ext.require(['Данные.Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС'], function () 
{
	Ext.define('Отчеты.РегламентированныйОтчетСтатистикаФормаУчетаПеремещенияТоваровТС.ФормаВводаГрафа1',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:395px;height:244px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	resizable: false,
	title: 'Графа 1. Отправитель (ввод реквизитов)',
	
	layout: {type: "fit",align: "stretch"},
	items:
	[{
		xtype: 'form',
		items:
		[
		{
			xtype: 'textarea',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительНаименование',
			style: 'position:absolute;left:121px;top:8px;width:266px;height:30px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительУлицаНомерДома',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:144px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительНаименование',
			text: 'Организация/ФИО физического лица:',
			style: 'position:absolute;left:8px;top:8px;width:106px;height:30px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительУлицаНомерДома',
			text: 'Улица, номер дома:',
			style: 'position:absolute;left:8px;top:144px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтправительСтранаНаименование',
			width: 240,
			height: 19,
			style: 'position:absolute;left:147px;top:72px;width:240px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительИндекс',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:48px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительОбласть',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:96px;width:266px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРФ_ОГРН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:192px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительСтранаНаименование',
			text: 'Страна:',
			style: 'position:absolute;left:8px;top:72px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительИндекс',
			text: 'Почтовый индекс:',
			style: 'position:absolute;left:8px;top:48px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительОбласть',
			text: 'Область:',
			style: 'position:absolute;left:8px;top:96px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительНаселенныйПункт',
			width: 266,
			height: 19,
			style: 'position:absolute;left:121px;top:120px;width:266px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительНаселенныйПункт',
			text: 'Населенный пункт:',
			style: 'position:absolute;left:8px;top:120px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРФ_ОГРН',
			text: 'ОГРН/ОГРНИП:',
			style: 'position:absolute;left:8px;top:192px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРФ_ИНН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРФ_КПП',
			width: 101,
			height: 19,
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРФ_ИНН',
			text: 'ИНН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРФ_КПП',
			text: 'КПП:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРБ_УНП',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРБ_УНП',
			text: 'УНП:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРК_БИН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:286px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРК_БИН',
			text: 'БИН:',
			style: 'position:absolute;left:224px;top:168px;width:55px;height:19px;text-align:center;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: false,
			name: 'ОтправительРК_ИИН',
			width: 101,
			height: 19,
			style: 'position:absolute;left:121px;top:168px;width:101px;height:19px;',
		},
		{
			xtype: 'label',
			name: 'НадписьОтправительРК_ИИН',
			text: 'ИИН:',
			style: 'position:absolute;left:8px;top:168px;width:106px;height:19px;',
		},
		{
			xtype: 'textfield',
			hideLabel: true,
			disabled: true,
			name: 'ОтправительСтранаКод',
			width: 23,
			height: 19,
			style: 'position:absolute;left:121px;top:72px;width:23px;height:19px;',
		},
		],
	}],
	dockedItems:
	[
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:219px;width:395px;height:25px;',
			dock: 'bottom',
			items:
			[
				{
					xtype: 'tbfill'
				},
				{
					text:'ОК',
				},
				'-',
				{
					text:'Закрыть',
					handler: function () {this.up('window').close();},
				},
			]
		},
	]
	});
});