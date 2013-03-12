Ext.define('Справочники.СпискиПрофессийДолжностейЛьготногоПенсионногоОбеспечения.ФормаВыбора',
	{
	extend: 'Ext.window.Window',
	style: 'position:absolute;width:733px;height:261px;',
	iconCls: 'bogus',
	minimizable: true,
	maximizable: true,
	title: 'Профессии и должности льготного пенсионного обеспечения',
	
	items:
	[
		{
			xtype: 'grid',
			style: 'position:absolute;left:8px;top:33px;width:717px;height:220px;',
			height: 220,width: 717,
			columns:
			[
				{
					text:'',
					width:'32',
				},
				{
					text:'Код',
					width:'160',
				},
				{
					text:'Наименование',
					width:'220',
				},
			]
		},
		{
			xtype: 'toolbar',
			style: 'position:absolute;left:0px;top:0px;width:733px;height:25px;',
			items:
			[
				'-',
				{
					text:'',
				},
				'-',
				{
					text:'Действие5',
				},
				{
					text:'Действие2',
				},
				{
					text:'Действие4',
				},
				'-',
				{
					text:'Подбор из списка №2',
				},
				'-',
				{
					text:'Действие7',
				},
				{
					text:'Действие1',
				},
				{
					text:'Действие10',
				},
				{
					text:'',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие5',
				},
				{
					text:'Действие8',
				},
				{
					text:'Действие10',
				},
				{
					text:'Действие формы выбрать',
				},
				'-',
				{
					text:'Действие1',
				},
				{
					text:'Действие',
				},
				'-',
				{
					text:'Действие4',
				},
				{
					text:'',
				},
				'-',
				{
					text:'Действие2',
				},
				{
					text:'Действие6',
				},
				{
					text:'Подбор из списка №1',
				},
				{
					text:'Действие6',
				},
				{
					text:'Действие11',
				},
				{
					text:'Действие7',
				},
				{
					text:'Действие9',
				},
				{
					text:'Действие3',
				},
				'-',
				'-',
				{
					text:'Действие9',
				},
				'-',
				'-',
			]
		},
	]
});